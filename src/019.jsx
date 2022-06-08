import './App.scss';
import './bootstrap.css';
import axios from 'axios';
import CreateTree from './Components/018/CreateTree';
import { useEffect, useState } from 'react';
import Tree from './Components/018/Tree';
import TreeEdit from './Components/018/TreeEdit';
import Animal from './Components/018/Animal';
import CreateAnimal from './Components/018/CreateAnimal';
import AnimalEdit from './Components/018/AnimalEdit';

function App() {
    const [lastTreeUpdate, setLastTreeUpdate] = useState(Date.now());
    const [lastAnimalsUpdate, setAnimalsUpdate] = useState(Date.now());

    // EDIT MODAL state
    const [editTreeModalData, setEditTreeModalData] = useState(null);
    const [editAnimalModalData, setEditAnimalModalData] = useState(null);

    const [editTreeData, setEditTreeData] = useState(null);
    const [editAnimalData, setEditAnimalData] = useState(null);

    const [treeList, setTreeList] = useState(null);
    const [animalList, setAnimalList] = useState(null);

    const [createTreeData, setCreateTreeData] = useState(null);
    const [createAnimalData, setCreateAnimalData] = useState(null);

    const [deleteTreeData, setDeleteTreeData] = useState(null);
    const [deleteAnimalData, setDeleteAnimalData] = useState(null);

    // READ

    useEffect(() => {
        axios.get('http://localhost:3003/trees').then((res) => {
            setTreeList(res.data);
        });
    }, [lastTreeUpdate]);

    useEffect(() => {
        axios.get('http://localhost:3003/animals').then((res) => {
            setAnimalList(res.data);
        });
    }, [lastAnimalsUpdate]);

    // CREATE

    useEffect(() => {
        if (null === createTreeData) {
            return;
        }
        axios
            .post('http://localhost:3003/trees', createTreeData)
            .then((res) => {
                setLastTreeUpdate(Date.now());
            });
    }, [createTreeData]);

    useEffect(() => {
        if (null === createAnimalData) {
            return;
        }
        console.log(createAnimalData);
        axios
            .post('http://localhost:3003/animals', createAnimalData)
            .then((res) => {
                setAnimalsUpdate(Date.now());
            });
    }, [createAnimalData]);

    // DELETE

    useEffect(() => {
        if (null === deleteTreeData) {
            return;
        }
        axios
            .delete('http://localhost:3003/trees/' + deleteTreeData.id)
            .then((res) => {
                setLastTreeUpdate(Date.now());
            });
    }, [deleteTreeData]);

    useEffect(() => {
        if (null === deleteAnimalData) {
            return;
        }
        axios
            .delete('http://localhost:3003/animals/' + deleteAnimalData.id)
            .then((res) => {
                setAnimalsUpdate(Date.now());
            });
    }, [deleteAnimalData]);

    // EDIT

    useEffect(() => {
        if (null === editTreeData) {
            return;
        }
        axios
            .put('http://localhost:3003/trees/' + editTreeData.id, editTreeData)
            .then((res) => {
                setLastTreeUpdate(Date.now());
            });
    }, [editTreeData]);

    useEffect(() => {
        if (null === editAnimalData) {
            return;
        }
        axios
            .put(
                'http://localhost:3003/animals/' + editAnimalData.id,
                editAnimalData
            )
            .then((res) => {
                setAnimalsUpdate(Date.now());
            });
    }, [editAnimalData]);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <CreateTree
                            setCreateTreeData={setCreateTreeData}
                        ></CreateTree>
                        <CreateAnimal
                            setCreateAnimalData={setCreateAnimalData}
                        ></CreateAnimal>
                    </div>
                    <div className="col-8">
                        <div className="card m-4">
                            <div className="card-header">
                                <h2>Trees list</h2>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    {treeList
                                        ? treeList.map((t, i) => (
                                              <Tree
                                                  key={t.id}
                                                  tree={t}
                                                  index={i + 1}
                                                  setDeleteTreeData={
                                                      setDeleteTreeData
                                                  }
                                                  setEditTreeModalData={
                                                      setEditTreeModalData
                                                  }
                                              ></Tree>
                                          ))
                                        : null}
                                </ul>
                            </div>
                        </div>
                        <div className="card m-4">
                            <div className="card-header">
                                <h2>Animals list</h2>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    {animalList
                                        ? animalList.map((a, i) => (
                                              <Animal
                                                  key={a.id}
                                                  animal={a}
                                                  index={i + 1}
                                                  setDeleteAnimalData={
                                                      setDeleteAnimalData
                                                  }
                                                  setEditAnimalModalData={
                                                      setEditAnimalModalData
                                                  }
                                              ></Animal>
                                          ))
                                        : null}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TreeEdit
                editTreeModalData={editTreeModalData}
                setEditTreeModalData={setEditTreeModalData}
                setEditTreeData={setEditTreeData}
            ></TreeEdit>
            <AnimalEdit
                editAnimalModalData={editAnimalModalData}
                setEditAnimalModalData={setEditAnimalModalData}
                setEditAnimalData={setEditAnimalData}
            ></AnimalEdit>
        </>
    );
}

export default App;
