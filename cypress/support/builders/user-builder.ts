import { UserData } from "../interfaces/UserData"

export class UserBuilder{
    private userData: UserData;

    constructor(){
        this.userData = {
            name: "Login test",
            email: "mail@mail.com",
            password: "password"
        }
    }

    withPasswordIncorrect(password: string){
        this.userData.password = password
        return this;
    }

    withEmailIncorrect(email: string){
        this.userData.email = email
        return this;
    }

    build(){
        return this.userData;
    }
}