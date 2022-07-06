export const checkInputs = (): boolean => {
    const inputs = document.getElementsByTagName("input")
    let check = true

    for (let i = 0; i < inputs.length; i++)
        if ((inputs[i] as HTMLInputElement).value == '') {
            (inputs[i] as HTMLInputElement).setCustomValidity("invalid")
            check = false
        }
    
    return check
}