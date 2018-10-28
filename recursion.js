class Tree {
    constructor() {
        this.tree = {
            "value": 100,
            "left": {"value": 90, "left": {"value": 70}, "right": {"value": 99}},
            "right": {"value": 120, "left": {"value": 110}, "right": {"value": 130}}
        };
        this.index = 0;
        this.nodeResult = {};
        this.treeArray = [];
    }

    add(index, value) {
        if (index in this.nodeResult) {
            this.nodeResult[index].push(value)
        } else {
            this.nodeResult[index] = [];
            this.nodeResult[index].push(value);
        }
    }

    recursion(node) {
        if (node == null) return;
        this.add(this.index, node.value, this.treeArray);
        this.index++;
        if (typeof node.left === "object") {
            this.recursion(node.left)
        }
        if (typeof node.right === "object") {
            this.recursion(node.right);
        }
        this.index--;
    }

    print() {
        this.recursion(this.tree);
        let result = [];
        for (let key in this.nodeResult) {
            result.push(this.nodeResult[key])
        }
        return result;
    }
}

let a = new Tree();
console.log(a.print());