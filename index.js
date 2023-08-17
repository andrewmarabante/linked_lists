
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
        const newNode = new Node(value, null, this.length);
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
        //So, I added an index but doesn't that just defeat the purpose of avoiding an array? ..
        const newNode = new Node(value, this.head);
        let currentNode = newNode;
        this.head = newNode;
        newNode.index = 0
        for(let i=0;i<this.length;i++)
        {
            currentNode.next.index++;
            currentNode = currentNode.next;
        }
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

    at(index)
    {
        let currentNode = this.head;
        if (index>=0 && index<this.length){
        while(currentNode.index != index)
        {
            currentNode = currentNode.next;
        }
        return currentNode
        }
        else{
            return 'Please enter a Valid index'
        }
    }
}

class Node
{
    constructor(value = null, next = null, index)
    {
        this.value = value;
        this.next = next;
        this.index = index;
    }
}
const linkedlist1 = new linkedList()
linkedlist1.prepend(10);
linkedlist1.prepend(20);
linkedlist1.append(5);
linkedlist1.append(3);
linkedlist1.prepend(30);
linkedlist1.prepend(40);
linkedlist1.append(15);
console.log(linkedlist1);
console.log(linkedlist1.at(-1));