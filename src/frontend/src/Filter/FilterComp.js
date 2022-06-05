import React, {Component, Fragment} from "react";
import CarFilterContainer from "../Container/CarFilterContainer";
import FilterContainer from "../Container/FilterContainer";
class FilterComp extends Component {

    state = {
        userInputContainerClicked: false,
        searchTerm: "",
        passingTags: {
            search: {
                inputTerm: ""
            },
            type: {
                small: false,
                medium: false,
                large: false,
                suv: false,
                van: false,
                luxury: false,
                truck: false,
                convertible: false
            }
        }
    };
    // toggles User search/filter/sort component when clicked
    clickListener = () => {
        this.setState(
            prevState => ({
                userInputContainerClicked: !prevState.userInputContainerClicked
            }),
            () =>
                this.state.userInputContainerClicked
                    ? window.scroll(0, 590)
                    : window.scroll(0, 0)
        );
    };

    sortClickListener = (pick, unpick) => {
        this.setState(
            prevState => ({
                passingTags: {
                    ...this.state.passingTags,
                    price: {
                        [pick]: !prevState.passingTags.price[pick],
                        [unpick]: false
                    }
                }
            }),
            () => this.sortCars(pick)
        )
    };
    allFilterClickListener = (e, filterProp) => {
        console.log("FILTER clicked", e.target.dataset.name);
        const name = e.target.Date.name;
        this.setState(prevState => ({
            passingTags: {
                ...prevState.passingTags,
                [filterProp]: {
                    ...prevState.passingTags[filterProp],
                    [name]: !prevState.passingTags[filterProp] [name]
                }
            }
        }));
    };

    // sortCars = sortArgument => {
    //     if (sortArgument === "lowHigh" && this.state.passingTags.price.lowHigh)
    //         const sortedCars = this.props.cars.sort(
    //             (x, y) => x.price - y.price
    //         );
    //     this.props.dispatch({
    //         type:
    //     })
    // }


//This function collects ALL keys that have true as a value, then create a new obj to compare to filter.
    filteredCollected = () => {
        const collectedTrueKeys = {
            type: []
        }
        const {type} = this.state.passingTags;

        for (let typeKey in type) {
            if (type[typeKey]) collectedTrueKeys.type.push(typeKey);
        }
        return collectedTrueKeys;
    };

    multiPropsFilter = (cars, filters) => {
        const filterKeys = Object.keys(filters);
        return cars.filter(car => {
            return filterKeys.every(key => {
                if (!filters[key].length) return true;

                if (Array.isArray(car[key])) {
                    return car[key].some(keyEle => filters[key].includes(keyEle));
                }
                return filters[key].includes(car[key]);
            });
        });
    };

    searchCars=() => {
        const filteredCars = this.multiPropsFilter(
            this.props.cars,
            this.filteredCollected()
        );
        return filteredCars.filter(car => {
            return car.name
                .toLowerCase()
                .includes(this.state.passingTags.search.inputTerm);
        })
    }


    render() {
        return(
            <Fragment>
                <CarFilterContainer
                tags={this.state.passingTags}
                allFilterClickListener={this.allFilterClickListener}
                searchTerm={this.state.searchTerm}

                />
                {this.props.cars.length ? (
                    <FilterContainer cars={this.searchCars}/>
                ): null}

            </Fragment>
        )
    }

}
const mapStateProps = state =>{
    return{
        cars: state.cars
    };
};

export default FilterComp(mapStateProps);

