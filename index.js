
function linkedList()
{
    head = null;
    next = null;
    length = 0;
    return{
        head,
        next,
        length,
        append(value)
        {
            console.log('working')
        }
    }
}

function node(value = null, next = null )
{
    return{
        value, next
    }
}
const linkedList1 = new linkedList();
console.log(linkedList1.append());