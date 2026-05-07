import { HStack, StackDivider, VStack, IconButton} from "@chakra-ui/react";
import { VscCheck } from "react-icons/vsc"
const List = ({todos, deleteTodo}) => {
    const complete = (id) => {
        deleteTodo(id)
    }
    return (
        <VStack
        divider={<StackDivider />}
        borderColor="black.100"
        borderWidth="1px"
        borderRadius="3px"
        p={5}
        alignItems="start"
        backgroundColor="white"
        margin="20px"
        >
            {todos.map(todo => {
                return (
                    <HStack key={todo.id} spacing="5">
                        <IconButton onClick={() => complete(todo.id)} icon={<VscCheck/>} isRound backgroundColor="red.300">完了</IconButton>
                        <span>{todo.content}</span>
                    </HStack>
                )
            })}
        </VStack>
    );
}

export default List;