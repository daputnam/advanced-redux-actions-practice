# Make sure to do one thing at a time, save and refresh to check for errors

###  Reducers
  * x Create Reducers in reducers/index.js
  * Look at state.js and create a reducer for each piece of state
  * x Remember reducers take 2 parameters: `state`, and `action`
  * Remember to give state a default value appropriate for what type it is in the reducer. Number, string, array, object
  * Remember to return state if the reducer doesn't care about the action
  * You will need to decide which reducer cares about which action type
  * Combine reducers and export

### Make these reducers
  *x currentCount
    * if "INCREASE_COUNTER" of "DECREASE_COUNTER" should return the current count plus one or minus one, depending on the action
  *x specialText
    * if "SET_SPECIAL_TEXT" should return the action value
  *x currentCity
    * if "SET_CURRENT_CITY" should return the action value
  *x users
    * if "REMOVE_USER" OR "ADD_USER" should return slice(1) to remove the first user or [...state,action.value] to add a user
  *x currentTemp
    * if "SET_TEMP" should return action value
  * isLoading
    * if "SET_IS_LOADING" should return action value  
  * videoURL
    * if "SET_VIDEO_URL" should return action value
  *x searchText
    * if "SET_SEARCH_TEXT" should return action value
  * currentUserSort
    * if "SET_CURRENT_USER_SORT" should return action value
  * videoScale
    * if "SET_VIDEO_SCALE" should return action value
### Create Actions in actions/index.js
  *x increaseCounter()
    * type = "INCREASE_COUNTER"
  *x decreaseCounter()
    * type = "DECREASE_COUNTER"
  *x setSpecialText(text)
    * type = "SET_SPECIAL_TEXT"
    * value = text
  *x removeUser()
    * type = "REMOVE_USER"
  *x addUser(user)
    * type = "ADD_USER"
    * value = user
  *x setSearchText(text)
    * type = "SET_SEARCH_TEXT"
    * value = text
  *x setIsLoading(isLoading)
    * type = "SET_IS_LOADING"
    * value = isLoading
  *x setTemp(temp)
    * type = "SET_TEMP"
    * value = temp
  *x setCurrentCity(city)
    * type = "SET_CURRENT_CITY"
    * value = city
  *x setVideoURL(URL)
    * type = "SET_VIDEO_URL"
    * value = URL
  *x setCurrentUserSort(sort)
    * type = "SET_CURRENT_USER_SORT"
    * value = sort
  *x setVideoScale(scale)
    * type = "SET_VIDEO_SCALE"
    * value = scale
### Create Store
  * xCreate a store.js file
  * xImport state from state.js
  * ximport createStore from redux
  * ximport reducers from reducers
  * xcreate the store
  * xexport the store

### Provide store to components
  * xIn index.js
  * xImport Provider from react-redux
  * xImport store from store.js
  * xUse Provider component to wrap App
  * xMake sure there is no whitespace between Provider and App
  * xGive Provider a prop “store” and the value of the store


### Containers
  *x We need to leave the components alone and create containers
  *x In the container folder, create a container file for each component i.e. SpecialTextContainer.js
  * Import the appropriate component into the container file
  * This is where the connect function and the actions should be imported
  * This is where mapStateToProps and mapDispatchToProps should be
  * This is where you should do the connecting
  * Export the container



### Create these Containers that care about what the data is
  * Import connect from react-redux into all containers
  * Import the appropriate component into the container
  * Create mapStateToProps function 
  * Call the connect function
  *x SpecialTextContainer.js
    * map a prop called `text` to the state `specialText`
  *x UsersContainer.js
    * map a prop called `users` to the state `users`
    * map a prop called `firstNameFilter` to the state `searchText`
    * map a prop called `sortOn` to the state `currentUserSort`
  *x CounterContainer.js
    * map a prop called `count` to the state `currentCount`
  *x CurrentCityContainer.js
    * map a prop called `text` to the state `currentCity`
  *x ThermostatContainer.js
    * map a prop called `temp` to the state `currentTemp`
  * VideoPlayerContainer.js
    * map a prop called `URL` to the state `videoURL`
    * map a prop called `scale` to the state `videoScale`
  * ModalContainer.js
    * map a prop called `isLoading` to the state `isLoading`

### Create these Containers that care about changing the data
  * Import the connect function from react-redux
  * create mapDispatchToProps
  * connect the component so that it becomes a container
  * export container
  *x SpecialTextBoxContainer.js
    * import `setSpecialText` action
    * map prop `set` to action `setSpecialText`
  *x UserButtonsContainer.js
    * import `addUser` and `removeUser` action
    * map prop `add` to action `addUser`
    * map prop `remove` to action `removeUser`
  *x CityDropDownContainer.js
    * import `setCurrentCity` action
    * map prop `set` to action `setCurrentCity`
  *x ChangeTemperatureContainer.js
    * import `setTemp` action
    * map prop `set` to action `setTemp`
  *x CounterButtonContainer.js
    * import the increaseCounter and decreaseCounter actions
    * map prop `increase` to action `increaseCounter`
    * map prop `decrease` to action `decreaseCounter`
  *x SearchTextBoxContainer.js
    * import `setSearchText` action
    * map prop `set` to action `setSearchText`
  *x ChangeTemperatureContainer.js
    * import `setTemp` action
    * map prop `set` to action `setTemp`
  * VideoTextBoxContainer.js
    * import `setVideoURL` action
    * map prop `set` to action `setVideoURL`
  * SortUsersContainer.js
    * import `setCurrentUserSort` action
    * map prop `set` to action `setCurrentUserSort`
  * ScaleVideoContainer.js
    * import `setVideoScale` action
    * map prop `set` to action `setVideoScale`
  * ShowModalContainer.js
    * import `setIsLoading` action
    * map prop `setIsLoading` to action `setIsLoading`Show
  * ModalContainer.js
    * import `setIsLoading` action
    * map prop `setIsLoading` to action `setIsLoading`

### App
  * Change App.js
  * Use containers instead of components
  * Basically, just add the word Container everywhere a component is referenced