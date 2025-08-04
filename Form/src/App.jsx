
import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm();

  async function onSubmit(data){

    await new Promise((resolve)=>setTimeout(resolve,5000));
console.log("From is submitting",data);
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
<div>
  <label>First name:  </label>
  <input className={errors.FirstName?"input-err":""}{...register("FirstName",{required:true,minLength:{value:4 , message:"!At least 4 characters"},
    maxLength:{value:6,message:"!At most 6 characters"}})}/>
    {errors.FirstName && <p className='error' >{errors.FirstName.message}</p>}
    
</div>
<br />

<div>
  <label>Last name: </label>
  <input className={errors.LastName?"input-err":""} {...register("LastName",{required:true,minLength:{value:6 ,message:"!At least 6 characters"}
    ,maxLength:{value:8,message:"!At most 8 characters"}})}/>
     {errors.LastName && <p className='error'>{errors.LastName.message}</p>}
</div>
<br />

<div>
  <label>Password: </label>
  <input className={errors.Password?"input-err":""}{...register("Password",{required:true,minLength:{value:4,message:'!At least 4 characters'},
    maxLength:{value:6 ,message:"!At most 6 numbers or characters"}})}/>
  {errors.Password && <p className='error'>{errors.Password.message}</p>}
</div>
<br />
<input type='submit' disabled={isSubmitting} value={isSubmitting?"Submitting":"Submit"}/>
        </form>
       
      </div>
     
      
    </>
  )
}

export default App
