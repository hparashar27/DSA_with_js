#include <iostream>
#include <vector>

class Node {
public:
    int val;
    Node* next;
    Node(int val) {
        this->val = val;
        this->next = nullptr;
    }
};

class SinglyLinkedList {
public:
    Node* head;
    Node* tail;
    int length;
    
    SinglyLinkedList() {
        this->head = nullptr;
        this->tail = nullptr;
        this->length = 0;
    }
    
    void push(int val) {
        Node* newNode = new Node(val);
        if (!this->head) {
            this->head = newNode;
            this->tail = this->head;
        } else {
            this->tail->next = newNode;
            this->tail = newNode;
        }
        this->length++;
    }
    
    Node* pop() {
        if (!this->head) return nullptr;
        Node* current = this->head;
        Node* newTail = current;
        while (current->next) {
            newTail = current;
            current = current->next;
        }
        this->tail = newTail;
        this->tail->next = nullptr;
        this->length--;
        if (this->length == 0) {
            this->head = nullptr;
            this->tail = nullptr;
        }
        return current;
    }
    
    Node* shift() {
        if (!this->head) return nullptr;
        Node* currentHead = this->head;
        this->head = currentHead->next;
        this->length--;
        if (this->length == 0) {
            this->tail = nullptr;
        }
        return currentHead;
    }
    
    void unshift(int val) {
        Node* newNode = new Node(val);
        if (!this->head) {
            this->head = newNode;
            this->tail = this->head;
        } else {
            newNode->next = this->head;
            this->head = newNode;
        }
        this->length++;
    }
    
    Node* get(int index) {
        if (index < 0 || index >= this->length) return nullptr;
        int counter = 0;
        Node* current = this->head;
        while (counter != index) {
            current = current->next;
            counter++;
        }
        return current;
    }
    
    bool set(int index, int val) {
        Node* foundNode = this->get(index);
        if (foundNode) {
            foundNode->val = val;
            return true;
        }
        return false;
    }
    
    bool insert(int index, int val) {
        if (index < 0 || index > this->length) return false;
        if (index == this->length) {
            this->push(val);
            return true;
        }
        if (index == 0) {
            this->unshift(val);
            return true;
        }
        
        Node* newNode = new Node(val);
        Node* prev = this->get(index - 1);
        Node* temp = prev->next;
        prev->next = newNode;
        newNode->next = temp;
        this->length++;
        return true;
    }
    
    Node* remove(int index) {
        if (index < 0 || index >= this->length) return nullptr;
        if (index == 0) return this->shift();
        if (index == this->length - 1) return this->pop();
        Node* previousNode = this->get(index - 1);
        Node* removed = previousNode->next;
        previousNode->next = removed->next;
        this->length--;
        return removed;
    }
    
    void reverse() {
        Node* node = this->head;
        this->head = this->tail;
        this->tail = node;
        Node* next = nullptr;
        Node* prev = nullptr;
        for (int i = 0; i < this->length; i++) {
            next = node->next;
            node->next = prev;
            prev = node;
            node = next;
        }
    }
    
    void print() {
        std::vector<int> arr;
        Node* current = this->head;
        while (current) {
            arr.push_back(current->val);
            current = current->next;
        }
        for (int i = 0; i < arr.size(); i++) {
            std::cout << arr[i] << " ";
        }
        std::cout << std::endl;
    }
};

int main() {
    SinglyLinkedList list;
    // SinglyLinkedList creation
    std::vector<int> arr = {12, 32, 43, 54, 65, 75, 67, 56, 45};
    
    for (int i = 0; i < arr.size(); i++) {
        list.push(arr[i]);
    }
    
    list.print();
    
    return 0;
}
