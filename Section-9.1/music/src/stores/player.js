import { defineStore } from 'pinia'
import { Howl } from 'howler'
import helper from '@/includes/helper'

// defineStore() takes two arguments: the name of the store and an object
// with the store's state and actions

export default defineStore('player', {
  state: () => ({
    current_song: {},
    sound: {},
    seek: '00:00',
    duration: '00:00',
    playerProgress: '0%'
  }),
  actions: {
    // song data is passed from Song.vue
    async newSong(song) {
      if (this.sound instanceof Howl) {
        // if sound is an instance of Howl
        this.sound.unload() // unload the current song
      }
      this.current_song = song

      this.sound = new Howl({
        src: [song.url],
        html5: true // Force to HTML5 so that the audio can stream in (best for large files).
      })

      this.sound.play()

      this.sound.on('play', () => {
        requestAnimationFrame(this.progress)
      })
    },

    async toggleAudio() {
      if (!this.sound.playing) {
        return
      }
      if (this.sound.playing()) {
        this.sound.pause()
      } else {
        this.sound.play()
      }
    },

    // progress() is called in newSong() and toggleAudio()
    progress() {
      this.seek = helper.formatTime(this.sound.seek())
      this.duration = helper.formatTime(this.sound.duration())

      this.playerProgress = `${(this.sound.seek() / this.sound.duration()) * 100}%`

      if (this.sound.playing()) {
        requestAnimationFrame(this.progress)
      }
    },

    updateSeek(event) {
      if (!this.sound.playing) {
          return;
        }
        const { x, width } = event.currentTarget.getBoundingClientRect(); // get the x position of the element
        // it is relative to the element that the event listener is attached to
        const clickX = event.clientX - x; // get the x position of the mouse click
        const percentage = clickX / width;
        const seconds = this.sound.duration() * percentage;

        this.sound.seek(seconds);
        this.sound.once('seek', this.progress);

    }
  },
  getters: {
    playing: (state) => {
      if (state.sound.playing) {
        return state.sound.playing()
      }
      return false
    }
  }
})
