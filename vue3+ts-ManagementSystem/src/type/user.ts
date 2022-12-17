export interface ListInt {
    id: number
    nickName: string
    role: RoleInt[]
    userName: string
}
interface RoleInt {
    role: number
    roleName: string
}
interface SelectDataInt {
    role: number
    nickName: string
}
interface RoleListInt {
    authority: number[]
    roleId: number
    roleName: string
}
interface ActiveInt {
    id: number
    nickName: string
    role: number[]
    userName: string
}
export class InitData {
    selectData: SelectDataInt = {
        nickName: "",
        role: 0
    }
    list: ListInt[] = []
    roleList: RoleListInt[] = []
    isShow = false
    active: ActiveInt = {
        id: 0,
        nickName: "",
        role: [],
        userName: "",
    }
}