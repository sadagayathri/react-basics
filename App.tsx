import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const x=100;
  const ar=[12,23,34]
  const br=["praveen","gubbala","srikanth"]
  const y="praveen"
  const a=10
  const b=20
  const s="praveen"
  const s1="gubbala"
  const c=134.42
  const d=-13
  const e=7
  const f=20
  const cr=[20,30,15,45,80,10]
  const cr1=[20,30,[15,45,80],10]
  const dr = ['dog','bird','cat','pig']
  const img1= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu9H8DXVn5ODQzrZtANHNWAyDbDInmHOUSsQ&usqp=CAU"
  const img2="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg"
  const mr=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThd35zDmJtyICxwmU27uUnBQmm9COaFKdavQ&usqp=CAU",
           "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg",
           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu9H8DXVn5ODQzrZtANHNWAyDbDInmHOUSsQ&usqp=CAU"
            ]

  const ob={
    'firstname':'Gayathri',
    'lastname':'Sada',
    'gender':'female'
  };

  const students=[
    {
      'firstname':'Gayathri',
      'lastname':'Sada',
      'gender':'female'
    },
    {
      'firstname':'subbarao',
      'lastname':'Sada',
      'gender':'male'
    },
    {
      'firstname':'srivani',
      'lastname':'Sada',
      'gender':'female'
    },
    {
      'firstname':'surya',
      'lastname':'Sada',
      'gender':'male'
    }
  ];
  return (
    <>
      <h1>Hello World{x}</h1>
      <ol>
        {
          ar.map((a)=>{
           return <li>{a}</li>
          })
        }
      </ol>
    <h1>{y.toUpperCase()}</h1>
    <h1>Welcome to JSX</h1>
    <h3>{a+b}</h3>
    <h3>{s.concat(s1)}</h3>
    <h3>{s+s1}</h3>
    <h3>{`${s}${s1}`}</h3>
    {
      <div>
        {
        ar.map((a)=>{
        return <b>{a}</b>
      
      })
    }
      </div>
      
    }
    {
      br.map((a)=>{
        return <b>{a}</b>
      
      })
    }
      <h3>{Math.sqrt(a)}</h3>
    <h3>{parseInt(c)}</h3>
    <h3>{y.toUpperCase()}</h3>
    <h3>length:{y.length}</h3>
    <h3>{y.split("").reverse().join("")}</h3>
    <h3>{a>b?a:b}</h3>
    <h3>{a%2==0?("Even"):("Odd")}</h3>
    <h3>{d>=0?("Positive"):("Negative")}</h3>
    <h3>{a>b?(a>x?a:x):(b>x?b:x)}</h3>
    <h3>{e%2==0?<b>Even</b>:<i>Odd</i>}</h3>
    <img src={f%2===0? img1:img2} alt="" />
    <div>
        {
        ar.map((a)=>{
        return <div>{a*a}</div>
      
      })
    }
      </div>
      <div>
        {
        ar.map((a)=>{
        return <h1>{a}</h1>
      
      })
    }
      </div>
   {
    cr.sort().map((a)=>{
      return <li>{a}</li>
    })
   }
   {
    ar.concat(cr).map((a)=>{
      return <li>{a}</li>
    })
   } 
   {
    ar.concat(cr).sort().map((a)=>{
      return <li>{a}</li>
    })
   }   
   {
        br.map((a)=>{
        return <li>{a}</li>
      
      })
    }
    <ol>
      {
          br.map((a)=>{
          return <li>{a}</li>
        
        })
      }
    </ol>
    <ul>
      {
      br.map((a)=>{
        return <li>{a.toLowerCase()}</li>
      
      })
      }
    </ul>
    
    <ol>
      {
          br.map((a)=>{
          return <li>{a.toUpperCase()}</li>
        
        })
      }
    </ol>
    {
      br.map((a)=>{
        return <li>{a.toLowerCase()}</li>
      
      })
      }

{
      br.map((a)=>{
        return <li>{a.length}</li>
      
      })
      }

    
  {
    dr.map((a)=>{
      
      return <h1>{a.slice(0,2)}</h1>
     })
  }
  {
    dr.map((a)=>{
      
      return <h1>{a.slice(0,1)}</h1>
     })
  }

  {
    dr.map((a)=>{
      return <li>{a.split("").reverse().join("")}</li>
     })
  }
  {
    dr.sort().map((a)=>{
      return <li>{a}</li>
     })
  }
  {
    cr.map((a)=>{
      return (a%2===0?<li>{a}</li>:null)
     })
  }
  {
    cr.map((a)=>{
      return (a%2!==0?<li>{a}</li>:null)
     })
  }
  {
    cr.map((a)=>{
      return (a>25?<li>{a}</li>:null)
     })
  }
  
  {
    cr1.flat().map((a)=>{
      return <li>{a}</li>
     })
  }
  {
    cr.map((a)=>{
      return (a%2===0?<li><i>{a}</i></li>:<li><b>{a}</b></li>)
     })
  }
  {
    cr.map((a)=>{
      return (a<25?<li>{a}</li>:null)
     })
  }
  <div>{
    cr.reduce((a,v)=>{
      return a+v
     },0)
    }
  </div>
  
  {
    mr.map((a)=>{
      return <img src={a} alt="" />
    })
  }
  {
    mr.map((a)=>{
      return <li><img src={a} alt="" /></li>
    })
  }
  {
    mr.map((a)=>{
      return <td><img src={a} alt="" /></td>
    })
  }
  {
    Object.entries(ob).map((prop)=>{
      return <li>{prop[0]}:{prop[1]}</li>
    })
  }
  {
    Object.entries(ob).map((prop)=>{
      return <li>{prop[0]}:{prop[1].toUpperCase()}</li>
    })
  }
  {
    students.map((a)=>{
      return Object.entries(a).map((prop)=>{
        return <li>{prop[0]}:{prop[1]}</li>
      })
    })
  }
  <table border='2'>
   
   <thead>
     <th>firstname</th>
     <th>Lastname</th>
     <th>Gender</th>
   </thead>
   <tbody>
    {
       students.map((a)=>{
           return  <tr><td>{a.firstname}</td><td>{a.lastname}</td><td>{a.gender}</td></tr>
        
     })
    }
    
   </tbody>
</table>

<table border={2}>
   
   <thead>
     <th>firstname</th>
     <th>Lastname</th>
     <th>Image</th>
   </thead>
   <tbody>
    {
       students.map((a)=>{
           return  <tr><td>{a.firstname}</td><td>{a.lastname}</td>
           <td><img src={a.gender==='female'?(img1):(img2)}></img></td>
           </tr>
        
     })
    }
    
   </tbody>
</table>

{
  students.map((a)=>{
    return (<div style={{border:'2px solid '}}>
      
      <h1>{a.firstname}{a.lastname}</h1>
      <h1>gender:{a.gender}</h1>
    </div>)
  })
}
<br></br>
<br></br>
<div>

<div style={{border:'50px  solid skyblue'}}>
  
  {
    
    <div style={{border:'2px solid',marginBottom:'20px'}}>
      <h1>SLIDE 1</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThd35zDmJtyICxwmU27uUnBQmm9COaFKdavQ&usqp=CAU" alt="" />
      <img src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg" alt="" />
      </div>
  }
 
  {
     <div style={{border:'2px solid', marginBottom:'10px'}}>
      <h1>SLIDE 2</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu9H8DXVn5ODQzrZtANHNWAyDbDInmHOUSsQ&usqp=CAU" alt="" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGEIKf5RT-lxMxx_qOrK4opqQMOecvvGn9w&usqp=CAU" alt="" />
      </div>
  }
</div>
</div>
    </>
  )
}  
export default App
