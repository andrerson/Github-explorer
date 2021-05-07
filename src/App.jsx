import { RepositoryList } from './components/RepositoryList'
import { Counter } from './components/Counter';
import '../src/styles/global.scss'

export function App(){
    return (
        <>
            <RepositoryList />
            <Counter />    
        </>
    );
}