export const loadData = (keyName) => {
    let res = localStorage.getItem(`${keyName}`)
    console.log(res)
    let data;
    try {
        data = JSON.parse(res)
    } catch {
        data = res
    }
    if (data) {
        return data
    } else {
        return null
    }
}


export const setData = (keyName, item) => {
    localStorage.setItem(`${keyName}`, JSON.stringify({item}))
}
