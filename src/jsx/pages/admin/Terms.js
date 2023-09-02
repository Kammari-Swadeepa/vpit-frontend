import Editor from "./EditorwithUseQuill"



const Terms = () => {

const termscontent ={"ops":[{"insert":"Test 123\nherar we go\nf\n"}]};

return(
    <>
     <h2 className="mb-0 fs-32 font-w800">Terms & Conditions</h2>

       <Editor content={termscontent} placeholder={'enter privacy...'} />

    </>
)


}
export default Terms