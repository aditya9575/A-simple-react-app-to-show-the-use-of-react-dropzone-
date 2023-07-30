import './App.css';
import Dropzone from 'react-dropzone'


function App() {
  return (
    <div className="app">
      
      <h1>HELLO CODERS</h1>

      <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
  {({getRootProps, getInputProps}) => (
    <section>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <button>Drag 'n' drop some files here, or click to select files</button>
      </div>
    </section>
  )}
</Dropzone>

    </div>
  );
}

export default App;























//---------------------------------------------------------------------------------------------------------------------------------\\
//In Case of adding a check on file type we want to be upload we use this piece of code 

// import React, { useState } from 'react';
// import './App.css';
// import Dropzone from 'react-dropzone';

// function App() {
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleDrop = (acceptedFiles) => {
//     // Filter the acceptedFiles array to only keep image file types
//     const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
//     const filteredImages = acceptedFiles.filter(file =>
//       allowedImageTypes.includes(file.type)
//     );

//     // Check if any non-image files were found
//     if (filteredImages.length !== acceptedFiles.length) {
//       setErrorMessage('Only image files (JPEG, PNG, GIF) are allowed.');
//     } else {
//       // Process the filteredImages further (e.g., display them, upload them, etc.)
//       console.log(filteredImages);
//       setErrorMessage('');
//     }
//   };

//   return (
//     <div className="app">
//       <h1>HELLO CODERS</h1>

//       <Dropzone onDrop={handleDrop}>
//         {({ getRootProps, getInputProps }) => (
//           <section>
//             <div {...getRootProps()}>
//               <input {...getInputProps()} />
//               <button>Drag 'n' drop some images here, or click to select images</button>
//             </div>
//           </section>
//         )}
//       </Dropzone>
      
//       {errorMessage && <p className="error">{errorMessage}</p>}
//     </div>
//   );
// }

// export default App;


//---------------------------------------------------------------------------------------------------------------------------------\\