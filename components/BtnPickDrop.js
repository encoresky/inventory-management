import Button from "./Button";

const BtnPickDrop = () => {
  return (
    <div className='bg-primary_light rounded-[1.875rem]'>
        <Button className='btnPickDrop' name='Pick'/>
        <Button className="btnPickDrop" name="Drop" />
    </div>
  )
}

export default BtnPickDrop
