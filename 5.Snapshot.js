
// Tạo 1 class Snapshot để lưu lại array ban đầu
    class Snapshot {
        constructor(array) {
        this.array = [...array];
        }
        //tạo phương thức phục hồi lại array ban đầu
        restore() {
        return [...this.array];
        }
    }
    
    let arr = [1, 2, 3, 4]
    let snap = new Snapshot(arr)
    arr[0] = 5;

    console.log(arr); // [5, 2, 3, 4]
    
    arr = snap.restore();

    console.log(arr);// [1, 2, 3, 4]

