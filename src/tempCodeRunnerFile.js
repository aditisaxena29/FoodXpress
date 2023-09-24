const fetchData = async () => {
    await getAllFoodItems().then(data => {
      dispatch({
        type : actionType.SET_FOOD_ITEMS,
        foodItems : data,
      });
    });
  };
