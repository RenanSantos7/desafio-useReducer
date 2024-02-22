export function salvarNoLocalStorage(chave, valor) {
    const valorJson = JSON.stringify(valor)
    
    localStorage.setItem(chave, valorJson)
}

export function carregarDoLocalStorage(chave) {
    const valorJson = localStorage.getItem(chave)
    
    if (valorJson) return JSON.parse(valorJson)
    
    return undefined
}