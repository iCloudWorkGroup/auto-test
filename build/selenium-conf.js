const process = require('process')

module.exports = {
    // Selenium �İ汾������Ϣ�������·����Ӳ�ѯ���°汾�������汾ֻ���޸İ汾�ż��ɡ�
    // https://selenium-release.storage.googleapis.com/index.html
    selenium: {
        version: '2.53.1',
        baseURL: 'https://selenium-release.storage.googleapis.com'
    },

    // Driver ��������ϵͳ�а�װ���������Selenium Ĭ��ʹ�� Firefox���������Ҫʹ�����������������Ҫ���ⰲװ Driver��
    // �ڴ����ǰ�װ Chrome �� driver �Ա�ʹ�� Chrome ���в��ԡ�
    driver: {
        chrome: {
            // Chrome ��������� Driver�������·����Ӳ�ѯ���°汾��
            // https://chromedriver.storage.googleapis.com/index.html
            version: '2.22',
            arch: process.arch,
            baseURL: 'https://chromedriver.storage.googleapis.com'
        }
    }
} 