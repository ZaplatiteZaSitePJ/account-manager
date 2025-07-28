import styles from "./Account.module.scss"
import type { FC } from "react"
import type { AccountType } from "../types/Account.interface"

type AccountTable = Pick<AccountType, "id" | "fullName" | "email" | "id" | "employment" | "telephone">

const Account: FC<AccountTable> = ({id, telephone, fullName, email, employment}) => {

    return (
    <table className={styles.table}>
        <caption>{fullName}</caption>
        <thead>
            <tr>
                <th>id</th>
                <th>почта</th>
                <th>телефон</th>
                <th>должность</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{id}</td>
                <td>{email}</td>
                <td>{telephone ? `${telephone}` : "-"}</td>
                <td>{employment ? `${employment}` : "-"}</td>
            </tr>
        </tbody>
    </table>
  )
}

export default Account