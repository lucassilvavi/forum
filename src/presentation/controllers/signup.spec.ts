import { SignUpController } from "./signup"

describe('SignUp Controller',()=>{
    test('Should return 400 if no name is provided',() => {

        const sut = new SignUpController()
        const httpRequest = {
            body: {
                email: 'eny_email@gmail.com',
                password: 'any_password',
                passwordConfirmation: 'any_password'
            }
        }
        const httpResponse = sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new Error('missing param: name'))
    })

    test('Should return 400 if no email is provided',() => {

        const sut = new SignUpController()
        const httpRequest = {
            body: {
                name: 'eny_name',
                password: 'any_password',
                passwordConfirmation: 'any_password'
            }
        }
        const httpResponse = sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new Error('missing param: email'))
    })
})