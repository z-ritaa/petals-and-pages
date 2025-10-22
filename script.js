body {
  background-color: #f8f3eb;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #4b3b2f;
  margin: 0;
  padding: 0;
  text-transform: lowercase;
}

header {
  text-align: center;
  padding: 40px 20px 10px;
}

h1 {
  font-size: 2.8em;
  margin-bottom: 5px;
  font-weight: 500;
}

.subtitle {
  font-size: 1em;
  color: #6b5542;
  margin-top: 5px;
}

main {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
}

#controls {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

#notes {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.note {
  background-color: #fff9f0;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
  transform: rotate(calc(-2deg + 4deg * var(--rand)));
  font-size: 1.1em;
  line-height: 1.5;
  position: relative;
}

.note::before {
  content: "";
}

#add-note {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 25px;
}

textarea {
  width: 100%;
  height: 100px;
  border: 1px solid #d4b89c;
  border-radius: 8px;
  padding: 10px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1.1em;
  resize: none;
  background-color: #fff9f0;
}

button {
  align-self: flex-end;
  background-color: #d4b89c;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #c19e7b;
}
