import { Table, TableContainer, TableHead, Typography,TableRow,TableCell, TableBody, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { red } from '@mui/material/colors'
const Apiget = () => {
    var[input,setInput]=useState([])
    //useEffect(() => {},[])
    useEffect(() => {
        //axios'get("url").then().catch()
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(
                (res) => {
                    console.log(res);
                    setInput(res.data)
                })
            .catch((err) => {
                    console.log(err)
            })
        },[]);
  return (
    <div>
           <TableContainer>
              <Table>
                  <TableRow>
                      <TableCell>UserID</TableCell>
                      <TableCell>ID</TableCell>
                      <TableCell>Body</TableCell>
                  </TableRow>
                  <TableBody>
                      {
                          input.map((val, i) => {
                              return (
                                  <TableRow key={i}>
                                      
                                      <TableCell><Typography sx={{color:'rgba(255, 255, 255, 0.87)'}}>{val.userId}</Typography></TableCell>
                                      <TableCell><Typography sx={{color:'rgba(255, 255, 255, 0.87)'}}>{ val.id}</Typography></TableCell>
                                      <TableCell><Typography sx={{color:'rgba(255, 255, 255, 0.87)'}}>{val.body}</Typography></TableCell>    
                                  </TableRow>
                              )
                          })
                      }
                </TableBody>
              </Table>
          </TableContainer>
              
          
    </div>
  )
}

export default Apiget
