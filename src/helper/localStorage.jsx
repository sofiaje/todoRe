export const loadData = (keyName) => {
    let res = localStorage.getItem(`${keyName}`)
    if (res) {
        let data = JSON.parse(res)
        return data
    } else {
        return []
    }
}

export const loadName = () => {
    let res = localStorage.getItem("name")
    
    return JSON.parse(res)
}


export const setData = (keyName, item) => {
    localStorage.setItem(`${keyName}`, JSON.stringify(item))
}
