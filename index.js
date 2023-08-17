
class linkedList 
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }   

    append(value)
    {
        const newNode = new Node(value, null);
        if (this.tail.next === null)
        {
            this.tail.next = newNode
        }
        this.tail = newNode;
        this.length++;
        console.log('marker');
        console.log(this)
        if (this.head === null)
        {
            this.head = newNode;
        }
    }

    prepend(value)
    {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.length++;
        if (this.tail === null)
        {
            this.tail = newNode
        }
    }

}

class Node
{
    constructor(value = null, next = null)
    {
        this.value = value
        this.next = next
    }
}
const linkedlist1 = new linkedList()
linkedlist1.prepend(10);
linkedlist1.prepend(20);
linkedlist1.append(5);
console.log(linkedlist1);