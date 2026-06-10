function menor(n1,n2,n3){
    if (n1 < n2 && n1 < n3){
        alert(`O número ${n1} é o menor`)
    }

    else if (n2 < n1 && n2 < n3){
        alert(`O número ${n2} é o menor`)
    }

    else{alert(`O número ${n3} é o menor`)}
}

alert(menor(2,1,3))