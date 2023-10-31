<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mec.symposium_reg</title>
  <style dangerouslySetInnerHTML={{__html: "\n        body {\n            background-color: #ffffffb1;\n            font-family: 'Arial', sans-serif;\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n        }\n\n        header {\n            background-color: #ffffffb1;\n            font-family: arial;\n            font-size: x-large;\n            color: rgb(21, 0, 255);\n            text-align: center;\n            padding: 1em;\n    \n        }\n\n        main {\n            max-width: 800px;\n            margin: 20px auto;\n            padding: 20px;\n            background-color:#ffffffb1;\n            border-radius: 8px;\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n        }\n\n        form {\n            display: grid;\n            grid-gap: 10px;\n        }\n\n        label {\n            font-weight: bold;\n        }\n\n        input, select {\n            width: 100%;\n            padding: 8px;\n            box-sizing: border-box;\n        }\n\n        button {\n            background-color: #333;\n            color: #fff;\n            padding: 10px;\n            border: none;\n            cursor: pointer;\n        }\n\n        button:hover {\n            background-color: #555;\n        }\n    " }} />
  <header>
    <h1><marquee behavior="alternate" direction="right">ABLAZE 2023</marquee></h1>
  </header>
  <main>
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="department">Department:</label>
      <input type="text" id="department" name="department" required />
      <label htmlFor="year">Year:</label>
      <select id="year" name="year" required>
        <option value="first">First Year</option>
        <option value="second">Second Year</option>
        <option value="third">Third Year</option>
        <option value="fourth">Fourth Year</option>
      </select>
      <label htmlFor="Event name">Event name:</label>
      <select id="Event name" name="Event name" required>
        <option value="Paper Presentation">Paper Presentation</option>
        <option value="Workshop">Workshop</option>
        <option value="Debugging">Debugging</option>
        <option value="IQ Test">IQ Test</option>
        <option value="Multimedia">Multimedia</option>
      </select>
      <label htmlFor="Abstract submission">Abstract submitted to muthayammalcollege@gmail.com:</label>
      <select id="Abstract submission" name="Abstract submission" required>
        <option value="yes">Yes</option>
        <option value="No">No</option>
      </select>
      <button type="submit">Register</button>
    </form>
  </main>
</div>
