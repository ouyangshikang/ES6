{
  // 基本定义和生成实例,继承父类及覆盖
  class Song {
    constructor(name = '稻香', url = 'https://www.zhoujielun.com') {
      this.name = name
      this.url = url
    }
  }
  // 继承父类Song
  class SongChild extends Song {
    constructor(name = '周杰伦的稻香') {
      super(name)  // 子类向父类传递参数,super一定要放在第一行
      this.type = '中国风'
    }
  }

  let l_song = new SongChild('周杰伦的等你回家')
  console.log(l_song)  // SongChild {name: "周杰伦的等你回家", url: “https://www.zhoujielun.com”, type: "中国风"}
}


{
  // getter, setter
  class Song {
    constructor(name = '稻香') {
      this.name = name
    }

    get fullName() {
      return `周杰伦的${this.name}`
    }

    set fullName(value) {
      this.name = value
    }
  }

  let singerSong = new Song()
  console.log('getter', singerSong.fullName)   // getter 周杰伦的稻香

  console.log('setter', singerSong.fullName = '周杰伦的等你下课')  // setter 周杰伦的等你下课
}


{
  // 静态方法 static
  class Song {
    constructor(name = '稻香') {
      this.name = name
    }
    static singSongs() {
      console.log('周杰伦在唱歌')
    }
  }
  Song.singSongs() // 周杰伦在唱歌
}

{
  // 静态属性 
  class Song {
    constructor(name = '稻香') {
      this.name = name
    }
    static singSongs() {
      console.log('周杰伦在唱歌')
    }
  }
  Song.type = '中国风'  

  console.log(Song.type) // 中国风
}