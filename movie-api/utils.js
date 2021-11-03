//Debouncer Helper

const debounce = (func, delay = 1000) => {
    let timeoutId;
    //return (arg1, arg2, arg3)
    return (...args) => { // <= passing argument from the shield
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            //func(arg1, arg2, arg3)
            func.apply(null, args)
        }, delay);

    };
};

