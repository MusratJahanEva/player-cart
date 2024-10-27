const allBtn = document.getElementsByClassName('add-btn')
for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        const name = event.target.parentNode.childNodes[1].innerText
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText
        const category = event.target.parentNode.childNodes[5].childNodes[1].innerText
        const selectedPlayers = document.getElementById('select-players-container')

        const button = event.target
        button.disabled = true;

        const firstCartCount = getConvertedValue('cart')
        const firstLeftCount = getConvertedValue('left')

        if (firstCartCount + 1 > 6 || firstLeftCount - 1 < 0) {
            alert('limit sesh r hobe na')
            return
        }
        event.target.parentNode.style.backgroundColor = 'gray'

        const budget = getConvertedValue('budget')
        document.getElementById('budget').innerText = budget - parseInt(price)
        const cart = getConvertedValue('cart')
        document.getElementById('cart').innerText = cart + 1
        const left = getConvertedValue('left')
        document.getElementById('left').innerText = left - 1

        const div = document.createElement('div')
        div.classList.add('flex')
        div.classList.add('justify-evenly')

        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')

        p1.innerText = name
        p2.innerText = price
        p3.innerText = category

        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)
        selectedPlayers.appendChild(div)

        UpdateTotalCost(price)
        updateGrandTotal()
    })
}
function updateGrandTotal(status) {
    const totalCost = getConvertedValue('total-cost')
    if (status === undefined) {
        document.getElementById('grand-total').innerText = totalCost
    }
    else {

        const couponCode = document.getElementById('code').value
        if (couponCode === 'Love420') {
            const discount = totalCost * 0.2
            document.getElementById('grand-total').innerText = totalCost - discount
        }
        else (
            alert('please enter valid number')
        )
    }

}
function UpdateTotalCost(value) {
    const totalCost = getConvertedValue('total-cost')
    const sum = totalCost + parseInt(value);
    document.getElementById('total-cost').innerText = sum

}


function getConvertedValue(id) {
    const price = document.getElementById(id).innerText
    const convertedPrice = parseInt(price);
    return convertedPrice;

}