var calculateItems = function (items) {
  
  if (items > 0) { 
    items = items - 1;
    console.log('В раковине осталось '+ items +' предметов.');
    debugger;
    calculateItems(items);
  }
};

calculateItems(10);
