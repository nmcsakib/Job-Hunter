const addToDb = id => {
    let appliedCart = {}
  
    //get the shopping cart from local storage
    const storedItem = localStorage.getItem('applied-job')
    if (storedItem) {
      appliedCart = JSON.parse(storedItem)
    }
  
    // add quantity
    // const quantity = shoppingCart[id]
    
    appliedCart[id] = 1;

    localStorage.setItem('applied-job', JSON.stringify(appliedCart))
}
const getStoredJobs = () => {
    let appliedCart = {}
  
    //get the shopping cart from local storage
    const storedItem = localStorage.getItem('applied-job')
    if (storedItem) {
      appliedCart = JSON.parse(storedItem)
    }
    return appliedCart
  }
  export {addToDb, getStoredJobs}