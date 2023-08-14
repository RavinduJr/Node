### 1. Difference between writeFilleSync and writeFile.

```
writeFileSync is the synchronous call it will execute completely after that only it will go to the next function or code. 

but writeFile is an async call so it will just registers as a call back in the registry and it will execute sometime in the future. So this wont block other executions.

Otherwise it will take a lot of time to execute just to write the file.

This is the style of the Node.js
```

#### Disadvantages of writeFileSync
- block the following code execution.
- incoming requests of other users until file operation is done.

### 2. Data comes as a stream. So what we do is we make a Buffer it acts as a container it works with the data chunks then release those chunks. We can't randomly pick data chunks and work with them, to organize these chunks we use buffer.