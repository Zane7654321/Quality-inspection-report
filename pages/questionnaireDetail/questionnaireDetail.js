Page({
  data: {
    isQualified: '', // 产品是否合格
    description: '', // 不合格问题描述
    images: [], // 上传的图片列表
  },

  onLoad(options) {
    // 从后台获取问卷详情数据（这里模拟数据）
    const questionnaireId = options.id;
    this.fetchQuestionnaireDetail(questionnaireId);
  },

  fetchQuestionnaireDetail(questionnaireId) {
    // 模拟从后台获取数据
    const questionnaire = {
      isQualified: '不合格',
      description: '产品存在严重质量问题',
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
      ],
    };

    this.setData({
      isQualified: questionnaire.isQualified,
      description: questionnaire.description,
      images: questionnaire.images,
    });
  },
});