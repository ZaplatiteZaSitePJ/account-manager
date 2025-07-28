import { getUser } from "./getUser";
import { getAllUsers } from "./getAllUsers";

export const combinedGetter = async () => {
    const userData = await getUser()
    const allUsersData = await getAllUsers()

    return {userData, allUsersData}
}