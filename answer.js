var MinStack = function() {
    //in javascript, arays have stack functionality built in already..
    this.container = [];
    //A stack will always remove objects in order, so if we only need to worry about the smallest value, at that position.
    this.minimumTracker = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    //array functionality
    this.container.push(val);

    //For minimum tracker ->
    //if first element, add.
    if(this.minimumTracker.length == 0){
        this.minimumTracker.push(val);
    }
    //If this is smaller than our current smallest, add it
    else if(this.minimumTracker[this.minimumTracker.length - 1] > val){
        this.minimumTracker.push(val);
    }
    //If it is bigger, repeat smallest number for this position.
    else{
        this.minimumTracker.push(this.minimumTracker[this.minimumTracker.length - 1]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    //When popping, remove both tops.
    this.minimumTracker.pop();
    return this.container.pop();

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    //minimum is not needed here
    return this.container[this.container.length -1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    //top of stack is always smallest number.
    return this.minimumTracker[this.minimumTracker.length - 1];
};
