
class linkedList 
{
    constructor()
    {
        this.head = null;
        this.length = 0;
    }   

    prepend(value)
    {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.length++;
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
linkedlist1.prepend();
console.log(linkedlist1)