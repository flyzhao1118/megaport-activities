/**
* activity2: get the value of the property
* @param {String} path - the object path ie. 'address.office.state'
* @obj {Object} the object
*/
function getValue(path, obj) {
    let props = path.split('.');
    let [res, tempPath] = [obj, null] ;
    while (props.length > 0) {
        tempPath = props.shift();
        res = res[tempPath];
        if (res === undefined) {
            console.log('Cannot find value!');
            return
        }
    }
    return res
}

/**
* activity3: fetch function
*/

//encapsulate async function 
function fetchData() {
    return fetch('https://api.megaport.com/v2/locations', {
        method: 'GET'
    }).then(res => res.json())
}

//use
fetchData().then(res => console.log(res.data)).catch(error => {
    console.error('Error:', error);
})