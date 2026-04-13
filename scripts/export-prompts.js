const fs = require('fs');
const path = require('path');
const Logger = require('../utils/logger');
const logger = new Logger('export-prompts');

const promptsDir = path.join(__dirname, '../prompts');
const buildDir = path.join(__dirname, '../build');

if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

// Recursively find all .js files in the prompts directory and categorize them
function findAndCategorizePrompts(dir) {
  const categories = {};
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      const categoryPrompts = [];
      const categoryItems = fs.readdirSync(fullPath);
      
      for (const categoryItem of categoryItems) {
        const categoryItemPath = path.join(fullPath, categoryItem);
        const categoryStat = fs.statSync(categoryItemPath);
        
        if (categoryStat.isFile() && categoryItem.endsWith('.js')) {
          try {
            const promptModule = require(categoryItemPath);
            
            if (!promptModule.id || !promptModule.messages) {
              continue;
            }
            
            categoryPrompts.push({
              name: promptModule.id,
              version: promptModule.version,
              description: promptModule.description,
              messages: promptModule.messages,
            });
          } catch (error) {
            logger.error(`Error loading prompt ${categoryItemPath}: ${error.message}`);
          }
        }
      }
      
      if (categoryPrompts.length > 0) {
        categories[item] = categoryPrompts;
      }
    }
  }
  
  return categories;
}

const categories = findAndCategorizePrompts(promptsDir);

for (const [categoryName, prompts] of Object.entries(categories)) {
  const categoryBuildDir = path.join(buildDir, categoryName);
  
  if (!fs.existsSync(categoryBuildDir)) {
    fs.mkdirSync(categoryBuildDir, { recursive: true });
  }
  
  const output = {
    generatedAt: new Date().toISOString(),
    prompts: prompts
  };
  
  fs.writeFileSync(
    path.join(categoryBuildDir, 'prompts.json'),
    JSON.stringify(output, null, 2)
  );
  
  logger.info(`Generated: ${categoryName}/prompts.json`);
}

logger.info('Export complete!');