import { contentApi } from '../../api/index'
import * as TYPE from '../actionType/audioPlayType'
import { is } from '../../utils'
import JSZip from 'jszip'
import FileSaver from 'file-saver'

const state = {
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    leftTime: 0,
    indicatorPosition: 0,
    curSongId: 0,
    batchDownload: {
        inProgress: false,
        total: 0,
        current: 0,
    },
}

const getters = {
    isPlaying: state => state.isPlaying,
    currentTime: state => parseInt(state.currentTime / 60) + ':' + (Array(2).join(0) + (state.currentTime % 60)).slice(-2),
    duration: state => parseInt(state.duration / 60) + ':' + (Array(2).join(0) + (state.duration % 60)).slice(-2),
    leftTime: state => parseInt((state.duration - state.currentTime) / 60) + ':' + (Array(2).join(0) + ((state.duration - state.currentTime) % 60)).slice(-2),
    indicatorPosition: state => state.currentTime / state.duration * 100,
    curSongId: state => state.curSongId,
    batchDownload: state => state.batchDownload,
}

const actions = {
    setIsPlaying({ commit, state, rootState }, data) {
        commit(TYPE.AUDIO_SET_IS_PLAY, data);
    },
    updateTime({ commit, state, rootState }, data) {
        commit(TYPE.AUDIO_SET_CURTIME, data.currentTime);
        commit(TYPE.AUDIO_SET_DURATION, data.duration);
    },
    changeSong({ commit, state, rootState }, data) {
        switch (data.model) {
            case 'pre':
                commit(TYPE.AUDIO_SET_IS_PLAY, false);
                let _id1 = (state.curSongId - 1 + data.songNum) % data.songNum;
                commit(TYPE.AUDIO_SET_CURSONGID, _id1);
                break;
            case 'next':
                commit(TYPE.AUDIO_SET_IS_PLAY, false);
                let _id2 = (state.curSongId + 1) % data.songNum;
                commit(TYPE.AUDIO_SET_CURSONGID, _id2);
                break;
            default:
                if (data.model === state.curSongId) {
                    return;
                }
                if (data.model >= 0 && data.model < data.songNum) {
                    commit(TYPE.AUDIO_SET_IS_PLAY, false);
                    commit(TYPE.AUDIO_SET_CURSONGID, data.model);
                }
                break;
        }
    },
    // 下载单个音频资源
    async audioDownload({ commit, state, rootState }, data) {
        if (!is('Object', data)) {
            return;
        }

        try {
            let res = await contentApi.getAudioResource(data);
            let aTag = document.createElement('a');
            let blob = new Blob([res]);
            aTag.download = data.songName + '.mp3';
            aTag.href = URL.createObjectURL(blob);
            aTag.click();
            URL.revokeObjectURL(blob);

        } catch (error) {
            console.log(error);
        }
    },
    // 同时执行
    // async audioAllDownload({ commit, state, rootState }, data) {
    //     if (!is('Array', data)) {
    //         return;
    //     }

    //     let zip = new JSZip();
    //     let allList = [];
    //     data.forEach(item => {
    //         let promise = contentApi.getAudioResource(item).then(data => {
    //             let name = item.songName + '.mp3';
    //             zip.file(name, data, { binary: true });
    //         });

    //         allList.push(promise);
    //     });

    //     await Promise.all(allList);
    //     let content = await zip.generateAsync({ type: 'blob' });
    //     FileSaver.saveAs(content, '批量下载.zip');
    // }

    // 顺序执行
    audioAllDownload({ commit, state, rootState }, data) {
        if (!is('Array', data)) {
            return;
        }
        rootState.requesting = true;
        const len = data.length;
        commit(TYPE.AUDIO_BATCH_DOWNLOAD, { inProgress: true, total: len, current: 0 });// 批量下载进度

        let zip = new JSZip();
        let cnt = 0;
        const over = data.reduce(async (previousValue, currentValue) => {
            await previousValue
            // console.log('once');
            commit(TYPE.AUDIO_BATCH_DOWNLOAD, { inProgress: true, total: len, current: cnt });// 批量下载进度

            return contentApi.getAudioResource(currentValue).then(res => {
                zip.file(data[cnt++].songName + ".mp3", res, { binary: true });
            })
        }, Promise.resolve());
        over.then(() => {
            zip.generateAsync({ type: 'blob' }).then((content) => {
                FileSaver.saveAs(content, '批量下载.zip');
                console.log('download over');
                rootState.requesting = false;
                commit(TYPE.AUDIO_BATCH_DOWNLOAD, { inProgress: false, total: 0, current: 0 });// 批量下载进度
            }).catch(error=>{
                console.log(error);
                alert("批量下载失败，请尝试进行10个资源内下载或使用其他国内流行的浏览器进行下载");
            });
        }).catch(error => {
            console.log(error);
            alert("批量下载失败，请尝试进行10个资源内下载或使用其他国内流行的浏览器进行下载.");
        });

    },
}

const mutations = {
    [TYPE.AUDIO_SET_IS_PLAY](state, response) {
        state.isPlaying = response;
    },
    [TYPE.AUDIO_SET_CURTIME](state, response) {
        state.currentTime = response;
    },
    [TYPE.AUDIO_SET_DURATION](state, response) {
        state.duration = response;
    },
    [TYPE.AUDIO_SET_CURSONGID](state, response) {
        state.curSongId = response;
    },
    [TYPE.AUDIO_BATCH_DOWNLOAD](state, response) {
        state.batchDownload = response;
    },

}

export default {
    state,
    getters,
    actions,
    mutations
}