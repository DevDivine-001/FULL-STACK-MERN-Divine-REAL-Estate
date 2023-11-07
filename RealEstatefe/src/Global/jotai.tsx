import {useAtom} from "jotai"
import {atomWithStorage} from "jotai/utils"

const UserAcc = atomWithStorage("Acc", {} || null)

const jotai = () => {
  return useAtom(UserAcc)
}

export default jotai