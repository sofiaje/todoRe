export const loadData = () => {
    let data = localStorage.getItem("list")
    let list = JSON.parse(data)
    if (list) {
        return list
    } else {
        return []
    }
}

export const setData = (list) => {
    localStorage.setItem("list", JSON.stringify(list))
}
