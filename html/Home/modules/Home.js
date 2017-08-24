import React from 'react'

export default React.createClass({

  text:function(event){
    console.log('--------');
console.log(this.refs['file'].files[0]);
  },

  handleClick:function(event){

console.log(this.refs['file'].files[0]);


        var formData = new FormData();
       formData.append("myfile", this.refs['file'].files[0]);
       $.ajax({
           url: "api/uploadfile/upload",
           type: "POST",
           data: formData,
           /**
           *必须false才会自动加上正确的Content-Type
           */
           contentType: false,
           /**
           * 必须false才会避开jQuery对 formdata 的默认处理
           * XMLHttpRequest会对 formdata 进行正确的处理
           */
           processData: false,
           success: function (data) {
               if (data.status == "true") {
                   alert("上传成功！");
               }
               if (data.status == "error") {
                   alert(data.msg);
               }
               $("#imgWait").hide();
           },
           error: function () {
               alert("上传失败！");
               $("#imgWait").hide();
           }
       });


},
  render() {
    return (


           <form className="form-signin">
             <h2 className="form-signin-heading">Please sign in</h2>
           <input type="file" id="exampleInputFile" ref="file" />

             <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleClick}>Sign in</button>
           </form>

      );
  }
})
