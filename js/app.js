const products=
[
    {name:'shirt',price:250000},
    {name:'cup',price:90000},
    {name:'pic',price:120000},
    {name:'ring',price:90000}

]
const buttons = document.querySelectorAll('.add')
const box = document.getElementById('buy')
const sum = document.getElementById('sum')
sum.value = 0
console.log(buttons)
function handelchange(event)
{
    console.log(event.target.value)
    sum.value = Number(sum.value) +( Number(event.target.value) * Number(products[event.target.id].price) )
}
buttons.forEach(function(item)
{
    item.addEventListener('click',function(event)
    {
        for(var i =0 ; i< products.length;i++)
        {
            if(item.id == products[i].name)
            {
                var tr = document.createElement('tr')
                var td1 = document.createElement('td')
                td1.append(products[i].name)
                td1.className ='text-center'
                tr.append(td1)
                var td2 = document.createElement('td')
                td2.append(products[i].price)
                td2.className = 'text-center'
                tr.append(td2)
                var td3 = document.createElement('td')
                var input = document.createElement('input')
                input.setAttribute('type','number')
                input.setAttribute('min','1')
                input.setAttribute('id',i)
                input.setAttribute('onchange','handelchange(event)')
                td3.append(input)
                td3.className = 'text-center'
                tr.append(td3)
                box.append(tr)

            }
        }
    })
})
