export class User {
    name: string
    
    constructor(name: string, public age: number) {
        this.name = name
    }

    setName(value: string): void {
        this.name = value
    }

    getName = (): string => {
        return this.name
    }
}

// public = bisa di akses di semua class / dari luar class
// protected = hanya bisa di akses dari class tersebut, dan kelas turunanya
// private = hanya bisa di akses dari class itu sendiri


class Admin extends User {
    accessRead: boolean = true
    accessWrite: boolean = true
    phone: number | string
    private _email: string = ""
    static getRoleUser: string = "Admin"

    constructor(phone: number | string, name: string, age: number) {
        // `super` untuk mendeklarasikan constuktor dari parent
        super(name, age)
        this.phone = phone
    }

    getRole(): { accessRead: boolean, accessWrite: boolean } {
        return {
            accessRead: this.accessRead,
            accessWrite: this.accessWrite
        }
    }

    // set tidak dapat me return nilai & set untuk validasi
    set email(value: string) {
        this._email = value;
    }

    // get untuk mengambil nilai yang berstatus private
    get email(): string {
        return this._email
    }

    static getRoleStatus() {
        return "Aktif"
    }

}


let admin = new Admin("081", "Rizky", 25)
console.log(admin )
console.log(admin.getRole())

admin.setName("Rizky Maulana")
console.log(admin.getName())

admin.email = "breakdesign28@gmail.com"
console.log(admin.email)


// ketika menggunakan `static` maka tidak perlu mendeklarasikan class dengan `new NamaClass`
console.log(Admin.getRoleUser)

console.log(Admin.getRoleStatus)