
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

    size()
    {
        return this.length;
    }

    head()
    {
        return this.head
    }

    tail()
    {
        return this.tail
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
linkedlist1.append(3);
console.log(linkedlist1);
console.log(linkedlist1.tail)