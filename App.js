import { StyleSheet } from 'react-native';
import { CategoriesContainer } from './containers/CategoriesContainer';

const data = [
  { categoryName: 'HolaMundo("print")', id: 1 },
  { categoryName: 'Prueba 12345', id: 2 },
  { categoryName: 'Creo que sirve bien', id: 3 },
  { categoryName: 'Bueno eso está bien', id: 4 },
  { categoryName: 'Hola mundo', id: 5 },
  { categoryName: 'Ayuda help', id: 6 },
]

export default function App() {
  return (
    <CategoriesContainer list={data}/>
  );
}

const styles = StyleSheet.create({});
