function ehPrimo(n) {
    if (n <= 1) return false
    
    let limite = Math.floor(Math.sqrt(n))
    for (let i = 2; i <= limite; i++) {
        if (n % i === 0) return false
    }
    
    return true
}

alert(ehPrimo(29))